"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

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
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

const Login = () => {
    const [state, setState] = useState("");
    const [error, setError] = useState<string | undefined>(undefined);
    const [success, setSuccess] = useState<string | undefined>(undefined);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const settings = useSelector((state: any) => state.settings);
    const { t } = useTranslation();

    const errors: { [key: string]: string } = {
        Signin: "Try signing with a different account.",
        OAuthSignin: "Try signing with a different account.",
        OAuthCallback: "Try signing with a different account.",
        OAuthCreateAccount: "Try signing with a different account.",
        EmailCreateAccount: "Try signing with a different account.",
        Callback: "Try signing with a different account.",
        OAuthAccountNotLinked:
            "To confirm your identity, sign in with the same account you used originally.",
        EmailSignin: "Check your email address.",
        CredentialsSignin:
            "Sign in failed. Check the details you provided are correct.",
        default: "Unable to sign in.",
    };

    const { facebook, google } = settings.settingsData.login;

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const handleRegister = () => {
        router.push('/register');
    };

    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
        setError(undefined);
        setSuccess(undefined);
        setState("loading");

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: values.email,
                password: values.password,
            });
            if (res?.error) {
                const errorMessage = errors[res.error] ?? errors.default;
                setError(errorMessage);
                toast.error(errorMessage);
            }
            if (res?.ok) {
                setSuccess("Login successful");
                toast.success("Login successful");
                router.push("/");
            }
        } catch (err) {
            console.error(err);
            setError((err as Error).message);
            toast.error((err as Error).message);
        } finally {
            setState(""); // Reset state after processing
        }
    };

    return (
        <div className="flex flex-col justify-center items-center p-28">
            <Card>
                <CardHeader>
                    <Label className="text-2xl">{t('login')}</Label>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                                        <FormLabel>{t('password')}</FormLabel>
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
                                <Button type="button" className="bg-slate-400" onClick={handleRegister}>
                                    {t('register')}
                                </Button>
                                <Button className="bg-slate-600" type="submit" disabled={isPending}>
                                    {t('login')}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
