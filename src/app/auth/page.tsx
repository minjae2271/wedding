import Signup from "./_component/Signup";

export default function AuthPage() {

    return (
        <main className="w-full h-screen flex flex-col gap-4 justify-center items-center bg-gradient-to-br from-purple-100 to-light-blue-100">
            <Signup />
        </main>
    )
}