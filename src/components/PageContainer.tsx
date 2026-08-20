import {Header} from "./Header";

type Props = {
    children: React.ReactNode;
};

export default function PageContainer({ children }: Props) {
    return (
        <div className="min-h-screen bg-gray-300">
            <Header />

            <main>
                {children}
            </main>
        </div>
    );
}