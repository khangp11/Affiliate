import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { Menubar } from "@/components/ui/menubar";
import { Menubarhome } from "@/components/home/Menubarhome";
export default function Home() {
  return (
    <main >
      <div>
        <Menubarhome></Menubarhome>
      </div>
      <div>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
