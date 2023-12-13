import { cn } from "@/lib/utils";
import { Avatar,AvatarImage } from "./ui/avatar";
import {UserAvatarProps} from '@/Types'
export const UserAvatar=({
    src,
    className
}:UserAvatarProps)=>{
return (
    <Avatar className={cn("h-7 w-7 md:h-10 md:w-10")}>
        <AvatarImage src={src}/>
    </Avatar>
)
}
