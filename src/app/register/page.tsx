"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSucces } from "@/components/form-success";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { postData } from "@/lib/clientFunctions";
import { useTranslation } from "react-i18next";
import { sleep } from "@/lib/utils";

const Register = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const { t } = useTranslation();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            passwordConfirm: ""
        }
    });

    const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");
        const { email, password, passwordConfirm } = values;
        if (password !== passwordConfirm) {
            setError("Password does not match!");
            return;
        }
        try {
            const response = await postData('/api/auth/signup', {
                name,
                email,
                password,
                passwordConfirm
            });
            if (response.success) {
                setSuccess('Đăng ký thành công!');
                await sleep(3000);
                handleLogin();
            } else {
                setError(response.err || 'Đăng ký thất bại.');
            }
        } catch (err) {
            console.error("Unexpected error:", err);
            setError("Đã xảy ra lỗi không mong muốn.");
        }
    };

    const handleLogin = () => {
        router.push('/login');
    };

    return (
        <div className="flex flex-col justify-center items-center p-28">
            <Card>
                <CardHeader>
                    <Label className="text-2xl">{t('register')}</Label>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder={t('enter_you_name') || ''}
                                                {...field}
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder={t('enter_you_email') || ''}
                                                {...field}
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder={t('enter_you_password') || ''}
                                                {...field}
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="passwordConfirm"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password Confim</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder={t('enter_you_confirm_password') || ''}
                                                {...field}
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {error && <FormError message={error} />}
                            {success && <FormSucces message={success} />}
                            <div className="grid grid-cols-2 gap-4">
                                <Button
                                    size='lg'
                                    className="w-full"
                                    variant="outline"
                                    onClick={() => { }}
                                >
                                    <FcGoogle className="h-5 w-5" />
                                    <span className="ml-2">Google</span>
                                </Button>
                                <Button
                                    size='lg'
                                    className="w-full"
                                    variant="outline"
                                    onClick={() => { }}
                                >
                                    <FaFacebook className="h-5 w-5" />
                                    <span className="ml-2">Facebook</span>
                                </Button>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Button type="button" className="bg-slate-400" onClick={handleLogin}>
                                    {t('login')}
                                </Button>
                                <Button className="bg-slate-600" disabled={isPending} type="submit">
                                    {t('register')}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card >
        </div>
    )
}
export default Register;
