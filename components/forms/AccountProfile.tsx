"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import UserValidation from "../../lib/validations/user";

import { Button } from "/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "/components/ui/form";
import { Input } from "/components/ui/input";
import { Textarea } from "../ui/textarea";
import Image from "next/image";

import default_pp from "/public/default_pp.jpg";
import { ChangeEvent, useState } from "react";
import { isBase64Image } from "/lib/utils";

import { useUploadThing } from "/lib/uploadthing";
import { updateUser } from "/lib/actions/user.actions";

import { usePathname, useRouter } from "next/navigation";

const AccountProfile = ({ user, btnTitle }: AccountProfileProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const { startUpload } = useUploadThing("media");

  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof UserValidation>>({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      username: user?.username || "",
      name: user?.name || "",
      profile_photo: user?.image || "",
      bio: user?.bio || "",
    },
  });

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      setFiles(Array.from(e.target.files));

      if (!file.type.includes("image")) {
        return;
      }

      fileReader.onload = async (e) => {
        const imageDataUrl = e.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    const blob = values.profile_photo;

    const hasImageChanged = isBase64Image(blob);

    if (hasImageChanged) {
      const imgRes = await startUpload(files);

      if (imgRes && imgRes[0].url) {
        values.profile_photo = imgRes[0].url;
      }
    }

    await updateUser({
      userId: user.id,
      username: values.username,
      name: values.name,
      bio: values.bio,
      image: values.profile_photo,
      path: pathname,
    });

    if (pathname === "/profile/edit") {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <Form {...form}>
      <form
        className="text-black flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between gap-4">
                <FormLabel>
                  {field.value ? (
                    <Image
                      className="object-cover rounded-full aspect-square"
                      width={128}
                      height={128}
                      src={field.value}
                      alt="pp"
                    />
                  ) : (
                    <Image
                      className="object-cover rounded-full aspect-square"
                      width={100}
                      height={100}
                      src={default_pp}
                      alt="pp"
                    />
                  )}
                </FormLabel>
                <FormControl>
                  <Input
                    onChange={(e) => handleImage(e, field.onChange)}
                    accept="image/*"
                    type="file"
                    className="px-2 text-slate-600 font-semibold"
                  />
                </FormControl>
              </div>
              <FormMessage className="text-white" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Name"
                  className="px-2 text-slate-600 font-semibold w-full py-6"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-white" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Username"
                  className="px-2 text-slate-600 font-semibold w-full py-6"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-white" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  rows={7}
                  placeholder="Bio"
                  className="px-2 text-slate-600 font-semibold resize-none w-full"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-white" />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-2 p-4">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AccountProfile;
