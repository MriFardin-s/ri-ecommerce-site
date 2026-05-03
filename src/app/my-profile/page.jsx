'use client'


import { authClient } from "@/lib/auth-client";
import { Button, Card, Avatar } from "@heroui/react";
import 'animate.css';
import { UpdateUserModal } from "@/components/UpdateUserModal";

const MyProfile = () => {


    const userData = authClient.useSession();
    const user = userData.data?.user;

    return (
        <div className="mb-22">
            <Card className="max-w-96 mx-auto flex flex-col items-center border animate__animated animate__fadeIn mt-20 ">
                <Avatar className="h-20 w-20">
                    <Avatar.Image
                        alt="user name"
                        src={user?.image}
                        referrerPolicy="no-referrer"
                        width={50} height={50}
                        
                    />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <h2 className="text-xl font-bold">{user?.name}</h2>
                <p className="text-muted">{user?.email}</p>

                <UpdateUserModal />
            </Card>
        </div>
    );
};

export default MyProfile;