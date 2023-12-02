import Image from "next/image";
import { FC } from "react";

import uploadIcon from '../../assets/icons/upload.png'
import { ICreateService } from "@/src/interfaces/IService";
import { Label } from "../ui/label";

interface GallarySetupProps {
    formData: ICreateService
    handleChange: any
    mediaSrc: any[]
}
 
const GallarySetup: FC<GallarySetupProps> = ({ mediaSrc, formData, handleChange }) => {
    return ( 
        <div className="service-form flex flex-col">
            <div className="header flex flex-col gap-[17px] mb-[30px]">
                <span className="text-[20px] font-bold text-custom-blue">Gallery</span>
                <span className="lg:w-[399px] text-sm text-[#080808]">This is required to verify and make your service standout</span>
            </div>
            <div className="form">
                <form action="" className="w-full flex flex-col gap-[41px]">
                    <div className="form-control">
                        <div className="custom-upload-btn">
                            <input type="file" hidden name="media" onChange={handleChange} id="media" />
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

                    <div className="flex items-center gap-2">{mediaSrc && mediaSrc.map(photo => (
                        <div key={photo} className="img-preview ">
                            <Image className="rounded-[4px]" src={URL.createObjectURL(photo)} alt="" width={105} height={72} />
                        </div>
                    ))
                    }</div>

                    <div className="form-control">
                        <div className="custom-upload-btn">
                            <Label className="text-sm font-semibold">Licenses and Certifications*</Label>
                            <input type="file" hidden name="licenseAndCertification" onChange={handleChange} id="licenseAndCertification" />
                            <label htmlFor="licenseAndCertification" className="border-[1px] w-full block rounded-[8px] shadow-md border-[#FED6AC] p-[10px] cursor-pointer">
                                <span className="button flex items-center w-fit gap-2 text-black bg-[#FED6AC] px-4 py-2 text-sm">
                                    <Image src={uploadIcon} alt="" />
                                    Browse
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="custom-upload-btn">
                            <Label className="text-sm font-semibold">Insurance Coverage</Label>
                            <input type="file" hidden name="insuranceCoverage" onChange={handleChange} id="insuranceCoverage" />
                            <label htmlFor="insuranceCoverage" className="border-[1px] w-full block rounded-[8px] shadow-md border-[#FED6AC] p-[10px] cursor-pointer">
                                <span className="button flex items-center w-fit gap-2 text-black bg-[#FED6AC] px-4 py-2 text-sm">
                                    <Image src={uploadIcon} alt="" />
                                    Browse
                                </span>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default GallarySetup;