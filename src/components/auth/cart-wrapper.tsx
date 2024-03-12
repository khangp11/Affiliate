"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

import { Header } from "@/components/auth/header";
import { Socail } from "@/components/auth/socail";
import { BackButton } from "@/components/auth/back-button";

interface CartWrapperProps {
    children: React.ReactNode;
    headerLable: string;
    backButtonLable: string;
    backButtonHref: string;
    showSocial?: boolean;
};
export const CartWrapper = ({
    children,
    headerLable,
    backButtonLable,
    backButtonHref,
    showSocial
}: CartWrapperProps) => {
    return (
        <Card className="w-40px shadow-md" >
            <CardHeader>
                <Header lable={headerLable} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Socail />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                    lable={backButtonLable}
                    href={backButtonHref}
                />
            </CardFooter>
        </Card>
    )
}