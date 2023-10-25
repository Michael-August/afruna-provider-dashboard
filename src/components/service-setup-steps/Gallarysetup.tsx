import Image from "next/image";
import { FC } from "react";

import uploadIcon from '../../assets/icons/upload.png'

interface GallarySetupProps {
    
}
 
const GallarySetup: FC<GallarySetupProps> = () => {
    return ( 
        <>
            <div className="service-form flex flex-col">
                <div className="header flex flex-col gap-[17px] mb-[30px]">
                    <span className="text-[20px] font-bold text-custom-blue">Gallery</span>
                    <span className="lg:w-[399px] text-sm text-[#080808]">This is required to verify and make your service standout</span>
                </div>
                <div className="form">
                    <form action="" className="w-full flex flex-col gap-[41px]">
                        <div className="form-control">
                            <div className="custom-upload-btn">
                                <input type="file" hidden name="" id="media" />
                                <label htmlFor="media" className="border-dashed border-[1px] rounded-[8px] cursor-pointer border-[#00AEEF] py-[30px] flex flex-col items-center justify-center">
                                    <span className="font-semibold text-lg mb-[11px]">Drag and drop files here</span>
                                    <span className="text-[#979797] text-sm mb-6">The file size limite is 1 MB per file</span>
                                    <span className="button flex items-center justify-center gap-2 bg-[#FED6AC] px-4 py-2 text-sm">
                                        <Image src={uploadIcon} alt="" />
                                        Browse
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div className="img-preview">
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default GallarySetup;