import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <main className="container flex-1 py-12">
      <Card className="mb-6 rounded-md bg-card">
        <CardContent>
          <h1 className="text-2xl">{t("How To Generate the Token?")}</h1>
        </CardContent>
      </Card>

      <Card className="mb-6 rounded-md bg-card">
        <CardContent>
          <h1 className="text-xl">1. {t("Fill out the form")}</h1>

          <p className="pt-8 pb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <h1 className="text-xl">2. {t("Click the button Generate")}</h1>

          <p className="pt-8 pb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <h1 className="text-xl">3. {t("View your token details")}</h1>

          <p className="pt-8 pb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}

export default App;
