import { useTranslations } from 'next-intl';
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Social from "./social";

export default function TopBar() {
    const t = useTranslations('Date');    

    return (
        <div className="bg-black text-white">
            <div className="mx-auto max-w-7xl p-2 lg:px-4">
                <div className="flex justify-between">
                    <p className="md:block hidden">{t('Saturday')}, 21 {t('December')}, 2024</p>
                    <LocaleSwitcher />
                    <Social />
                </div>
            </div>
        </div>
    );
}
