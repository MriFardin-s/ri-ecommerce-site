"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";
import { toast } from "react-toastify";

export function UpdateUserModal() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;

        try {
            const { error } = await authClient.updateUser({
                name,
                image,
            });

            if (!error) {
                toast.success("সফলভাবে আপডেট করা হয়েছে");
            } else {
                toast.error(error.message || "আপডেট ব্যর্থ হয়েছে");
            }
        } catch (err) {
            toast.error("কিছু একটা ভুল হয়েছে!");
        }




    };
    return (
        <Modal>
            <Button className="bg-green-500">
                <BiEdit />প্রোফাইল আপডেট করুন
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-green-200 text-green-soft-foreground">
                                <BiUser className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>তথ্য আপডেট করুন</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface >
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>নাম</Label>
                                        <Input placeholder="সম্পূর্ণ নাম" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="url">
                                        <Label>ফটো ইউআরএল</Label>
                                        <Input placeholder="https://example.com/photo.jpg" />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" className="bg-red-500">
                                            বাদ দিন
                                        </Button>
                                        <Button type="submit" slot="close" className="bg-green-500">সেভ করুন</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}