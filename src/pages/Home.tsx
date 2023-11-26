import TokenGenerator from "@/components/token-generator";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="container flex-1 py-12">
      <Card className="mb-6 rounded-md bg-card">
        <CardContent>
          <h1 className="text-2xl">{t("title")}</h1>
        </CardContent>
      </Card>
      <TokenGenerator />
    </main>
  );
}
