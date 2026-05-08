import { updateUser } from "@/app/lib/actions";
import { getUserById } from "@/app/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";
import React from "react";

const UserUpdatePage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUserById(userId);

  const updateUserWrapper = async(formData) => {
    'use server';
    return updateUser(userId, formData);
  }
  return (
    <div>
      <h1>Editing User: {user.name}</h1>
      <div className="lg:w-1/2 px-4 mx-auto h-screen flex items-center justify-center">
        <form action={updateUserWrapper} className="flex flex-col gap-4 w-full">
          <TextField className="w-full" name="name" defaultValue={user?.name} type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>
          <TextField className="w-full" name="email" defaultValue={user?.email} type="email">
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField className="w-full" name="role" defaultValue={user?.role} type="text">
            <Label>Role</Label>
            <Input placeholder="Enter your Role" />
          </TextField>

          <div className="flex gap-2 justify-end">
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" slot="close">
              Update User
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserUpdatePage;
