"use client";

import { FC, useEffect, useState } from "react";
import * as io from "socket.io-client";
import Image from "next/image";

import { Button } from "@/src/components/ui/button";

import plus from "../../../assets/icons/plus.png";
import Modal from "@/src/components/Modal";
import { Label } from "@/src/components/ui/label";
import { useModal } from "@/src/components/context/ModalContext";
import { Card, CardContent } from "@/src/components/ui/card";

import searchIcon from "../../../assets/icons/search.png";
import profilepic from "../../../assets/images/profile_pic.png";
import phone from "../../../assets/icons/phone.png";
import info from "../../../assets/icons/info.png";
import sendIcon from "../../../assets/icons/send.png";
import { useSelector } from "react-redux";
import { RootState, store } from "@/src/redux/store";
import ChatService from "@/src/services/chat.service";
import clsx from "clsx";
import { IUser, IUserBio } from "@/src/interfaces/IUser";
import { IConversation } from "@/src/interfaces/IChat";
import { setMessages, updateConversation } from "@/src/redux/features/app/chat_slice";
import Loading from "../../../components/loading";
import '@/src/assets/css/styles.css'

interface ChatProps {}

const Chat: FC<ChatProps> = () => {
  const chatApis = new ChatService();
  const [isNewChat, setIsNewChat] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newUserChat, setNewUserChat] = useState<IUser>();
  const [friendToChat, setFriendToChat] = useState<IConversation>();
  const { isOpen, openModal, closeModal } = useModal();
  const conversions = useSelector(
    (state: RootState) => state.chat.conversations
  );
  const users = useSelector((state: RootState) => state.chat.users);
  const loggedInUser = useSelector((state: RootState) => state.auth.userBio);
  const [user, setUser] = useState<IUserBio>({
    _id: "",
    avatar: "",
    country: "",
    email: "",
    firstName: "",
    followers: 0,
    following: 0,
    lastName: "",
    phoneNumber: "",
    role: "",
  });
  const [messageToSend, setMessageToSend] = useState("");
  const [newUserMessage, setNewUserMessage] = useState<any[]>([])

  let messages = useSelector((state: RootState) => state.chat.messages);

  const startNewChat = (userToChat: IUser) => {
    // messages = []
    setNewUserChat(userToChat);
    setIsNewChat(true);
    closeModal();
  };

  const fetchMessages = (friend: any) => {
    chatApis.getMessages(friend._id);
    setFriendToChat(friend);
    setIsNewChat(false)
  };

  const fetchUsersToChat = () => {
    chatApis.getUsers();
    openModal();
  };

  const handleChange = (e: any) => {
    setMessageToSend(e.target.value);
  };

  const sendMessage = (message: any) => {
    let payload: { message: string; to: any } = {
      message,
      to: "",
    };
    if (isNewChat) {
      payload.to = newUserChat;
      chatApis.sendMessage(payload);
      let newConversation: IConversation = {
        _id: '',
        alias: `${newUserChat?.firstName} ${newUserChat?.lastName}`,
        aliasAvatar: '',
        lastMessage: payload.message,
        recipients: [payload.to, user._id],
        unreadMessages: 0
      }
      store.dispatch(updateConversation(newConversation))
      setNewUserMessage([...newUserMessage, payload])
    } else {
      payload.to = friendToChat;
      chatApis.sendMessage(payload);
    }
    setMessageToSend("")
  };

  useEffect(() => {
    if (!user) {
      setUser(JSON.parse(sessionStorage.getItem("user") || ""));
    }

    const socket = io.connect(
      "https://afruna-backend-cmsxg.ondigitalocean.app"
    );
    socket.emit("register", loggedInUser._id);
    socket.on("message", (newMessage) => {
      store.dispatch(setMessages(newMessage));
    });

    chatApis.getConversations({ setIsLoading });
    setUser(JSON.parse(sessionStorage.getItem("user") || ""));
  }, []);
  return (
    <div className="dashboard max-w-screen lg:px-[32px] px-5 pb-[132px]">
      <header className="py-6 lg:mx-[-32px] lg:px-[32px] lg:bg-white lg:mb-8 mb-[30px]">
        <div className="item flex flex-wrap items-center justify-between">
          <span className="text-2xl font-semibold">Chat Room</span>
          {/* <Button onClick={openModal} className="btn rounded-[4px] flex items-center justify-center gap-3 px-[18px]">
                          <Image src={plus} alt="plus icon" />
                          <span>Set Withdraw</span>
                      </Button> */}
        </div>
      </header>
      {isLoading === false ? (
        <main className="lg:flex w-full gap-4">
          <div
            className={clsx(
              messages.length > 0 || isNewChat ? "hidden lg:block" : "block"
            )}
          >
            <Card className="rounded-[20px] lg:h-[550px] overflow-y-scroll relative pt-[38px] px-6 pb-[86px] lg:w-[327px]">
              <CardContent className="flex flex-col">
                <div className="top">
                  <span className="text-[20px]">Messages</span>
                  <div className="search my-5 flex items-center justify-between px-[19px] py-[10px] border border-[#D5D5E6] rounded-[8px]">
                    <input
                      type="text"
                      className="outline-none"
                      name=""
                      placeholder="Search Name"
                      id=""
                    />
                    <Image src={searchIcon} alt="" />
                  </div>
                </div>
                <div className="friend-list flex flex-col gap-2">
                  {conversions.map((convo) => {
                      const nameSplit = convo.alias.split(" ");
                      const firstWord = nameSplit[0]?.charAt(0).toUpperCase();
                      const secondWord = nameSplit[1]?.charAt(0).toUpperCase();
                    return (
                      <div
                        onClick={() => fetchMessages(convo)}
                        className="friend rounded-[8px] bg-gray-50 cursor-pointer px-[14px] py-4 flex items-center justify-between"
                      >
                        <div className="pic-info flex items-center gap-4">
                          <div
                            className={`w-10 h-10 relative overflow-hidden rounded-full flex justify-center items-center `}
                          >
                            {convo.aliasAvatar ? (
                              <Image src={convo.aliasAvatar} alt="image" fill />
                            ) : (
                              <div className=" w-full h-full text-sm bg-slate-300 flex justify-center items-center">
                                {`${firstWord} ${secondWord}`}
                              </div>
                            )}
                          </div>
                          <div className="info flex flex-col gap-1">
                            <span className="text-sm text-custom-blue font-semibold">
                              {convo.alias}
                            </span>
                            <span className="last-chat text-[#A2A2A2] text-xs">
                              {convo.lastMessage}
                            </span>
                          </div>
                        </div>
                        {/* <span className="read-status bg-[#E1E2FF] text-[##5D5FEF] w-6 h-6 rounded-[50px] text-center">1</span> */}
                      </div>
                    );
                  })}
                </div>

                <div
                  onClick={fetchUsersToChat}
                  className="start-new-chat flex items-center justify-center w-12 h-12 cursor-pointer absolute bottom-10 right-5 rounded-[50px] bg-[#1F74A2]"
                >
                  <Image src={plus} alt="" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            className={clsx(
              messages.length > 0 || isNewChat
                ? "block relative"
                : "chat-details hidden lg:block relative"
            )}
          >
            <Card className="px-6 pb-9 rounded-[20px] lg:h-[550px] lg:w-[767px]">
              <CardContent className="">
                {messages.length > 0 || isNewChat ? (
                  <div>
                    <div className="top px-[31px] py-[30px] flex items-center justify-between">
                      <div className="pic-info flex items-center gap-4">
                        <Image
                          src={profilepic}
                          width={40}
                          height={40}
                          alt=""
                        />
                        <div className="info flex flex-col gap-1">
                          {isNewChat ? (
                            <span className="text-sm text-custom-blue font-semibold">
                              {newUserChat?.firstName} {newUserChat?.lastName}
                            </span>
                          ) : (
                            <span className="text-sm text-custom-blue font-semibold">
                              {friendToChat?.alias}
                            </span>
                          )}
                          {isNewChat ? (
                            <span className="last-chat text-[#A2A2A2] text-xs">
                              {newUserChat?.role}
                            </span>
                          ) : (
                            <span className="last-chat text-[#A2A2A2] text-xs">
                              {newUserChat?.role}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="actions flex items-center gap-[22px]">
                        <Image src={phone} alt="" />
                        <Image src={info} alt="" />
                      </div>
                    </div>
                    <hr className="mb-5 -mx-6" />
                    <div className="chats">
                      {!isNewChat ? messages.map((message) => (
                        <div className="sent-received-messages">
                          <div
                            className={clsx(
                              message.from == user._id ||
                                message.from._id == user._id
                                ? "sent"
                                : "received"
                            )}
                          >
                            <div className="sender-profile">
                              <span className="time">{message.time}</span>
                              {/* <span className="name">You</span> */}
                              {/* <div className="profile-pic">
                                                              <div className="profile-pic">
                                                                  <img *ngIf="!user.avatar" src="assets/images/noimg_avatar.png" alt="">
                                                                  <img *ngIf="user.avatar" [src]="user.avatar" alt="">
                                                              </div>
                                                          </div> */}
                            </div>

                            <div className="receiver-profile">
                              {/* <div className="profile-pic">
                                                              <img *ngIf="!message.to[0].avatar" src="assets/images/noimg_avatar.png" alt="">
                                                              <img *ngIf="message.to[0].avatar" [src]="message.to[0].avatar" alt="">
                                                          </div> */}
                              {/* <span className="name">{{message.to[0].fullName}}</span> */}
                              <span className="time">{message.time}</span>
                            </div>
                            <div className="messages">
                              <span
                                style={{ whiteSpace: "pre-line" }}
                                className="message"
                              >
                                {message.message}
                              </span>
                            </div>
                          </div>
                        </div>
                      )) :
                        <div className="">
                          {
                            newUserMessage.length !== 0 ? newUserMessage.map(message => (
                              <div>
                                <div className="sent">
                                  <div className="messages">
                                    <span
                                      style={{ whiteSpace: "pre-line" }}
                                      className="message"
                                    >
                                      {message.message}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))
                               :
                              <div className="flex items-center justify-center">
                                Start chat with this user
                              </div>
                          }
                          
                        </div>
                      }
                    </div>

                    <div className="input w-[90%] lg:w-[95%] flex items-center justify-between rounded-[8px] absolute bottom-6 border border-[#D5D5E6]">
                      <input
                        type="text"
                        placeholder="write your message here"
                        className="outline-none ml-5 w-[95%]"
                        name="message"
                        onChange={handleChange}
                        value={messageToSend}
                      />
                      <Image
                        onClick={() => sendMessage(messageToSend)}
                        src={sendIcon}
                        alt=""
                        className="bg-[#00AEEF] cursor-pointer rounded-t-[10px] rounded-br-[10px] rounded-bl-[88px]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="py-60 no-message text-3xl text-slate-400 flex items-center justify-center">
                    No message Yet! Select a friend to chat with.
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      ) : (
        <Loading />
      )}

      <Modal isOpen={isOpen} onClose={closeModal} height={true}>
        <div className="flex flex-col">
          <div className="top flex flex-col gap-2 mb-7">
            <span className="title text-2xl font-bold text-custom-blue">
              Select user to chat
            </span>
            <span className="body text-base text-[#777]">
              Admins, providers, vendors, clients, etc
            </span>
          </div>
          <div className="users flex flex-col gap-2">
            {users.map((user) => (
              <div
                onClick={() => startNewChat(user)}
                className="friend cursor-pointer px-[14px] py-4 flex items-center justify-between rounded-[8px] bg-gray-50"
              >
                <div className="pic-info flex items-center gap-4">
                  <div
                    className={`w-10 h-10 relative overflow-hidden rounded-full flex justify-center items-center `}
                  >
                    {user.avatar ? (
                      <Image src={user.avatar} alt="image" fill />
                    ) : (
                      <div className=" w-full h-full text-sm bg-slate-300 flex justify-center items-center">
                        {`${user.firstName
                          .charAt(0)
                          .toUpperCase()} ${user.lastName
                          .charAt(0)
                          .toUpperCase()}`}
                      </div>
                    )}
                  </div>

                  <div className="info flex flex-col">
                    <span className="text-sm text-custom-blue font-semibold">
                      {user.firstName} {user.lastName}
                    </span>
                    <span className="last-chat text-[#A2A2A2] text-xs">
                      {user.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Chat;
