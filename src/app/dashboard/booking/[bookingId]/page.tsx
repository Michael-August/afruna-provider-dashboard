"use client"

import { RootState } from "@/src/redux/store";
import BookingService from "@/src/services/booking.service";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface SingleBookingProps {
    params: { bookingId: string }
}
 
const SingleBooking: FC<SingleBookingProps> = ({params}) => {
    const router = useRouter()
    const booking = useSelector((state: RootState) => state.booking.booking)

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const bookingApis = new BookingService()
        bookingApis.getBooking(params.bookingId, {setIsLoading})
    }, [])
    return ( 
        <>
            Single Booking with id {params.bookingId}
        </>
    );
}
 
export default SingleBooking;