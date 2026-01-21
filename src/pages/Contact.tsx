import { useRef, useState } from "react";
import { Heading } from "../components/ui/Heading";
import { Paragraph } from "../components/ui/Paragraph";
import Card from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { FieldBox } from "../components/ui/FieldBox";
import { Button } from "../components/ui/Button";
import emailjs from "@emailjs/browser";
import MailIcon from "../assets/icons/mail.svg?react";
import PhoneIcon from "../assets/icons/phone.svg?react";
import SendIcon from "../assets/icons/send.svg?react";

export function Contact({ lang }: { lang: "FR" | "EN" }) {
  const form = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Heading level={2} variant="gradient">
        Contact
      </Heading>

      <Paragraph size="big" className="my-4">
        {lang === "FR"
          ? "N'hésitez pas à me contacter !"
          : "Feel free to reach out to me!"}
      </Paragraph>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-15 md:px-30 lg:px-50 xl:px-70 mt-8 mb-12 box-border w-full">
        <div className="space-y-6">
          <Card.Description
            icon={<MailIcon />}
            iconDecoration="outlinedDiamond"
            title="Email"
            description="timourjbanov@gmail.com"
            size="small"
          />

          <Card.Description
            icon={<PhoneIcon />}
            iconDecoration="miniBeatingCircle"
            title={lang === "FR" ? "Téléphone" : "Phone"}
            description="+33 7 84 34 20 23"
            size="small"
          />

          <Card.List
            title={lang === "FR" ? "Réseaux Sociaux" : "Social Media"}
            listItems={[
              <a
                href="https://www.linkedin.com/in/timourje/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full block px-4 py-2"
              >
                LinkedIn
              </a>,
              <a
                href="https://github.com/TimourBussy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full block px-4 py-2"
              >
                GitHub
              </a>,
            ]}
            size="small"
          />
        </div>

        <Card>
          <Heading level={4} className="mb-6 text-center md:text-left">
            {lang === "FR" ? "Envoyez-moi un message" : "Send me a message"}
          </Heading>
          <form
            ref={form}
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault();
              setError(null);
              setLoading(true);
              if (!form.current) return;
              emailjs
                .sendForm(
                  "service_z06vp7o",
                  "template_cl3qtxl",
                  form.current,
                  "vbQOrOi0NK4BE7230",
                )
                .then(
                  () => {
                    setLoading(false);
                    window.alert(
                      lang === "FR"
                        ? "Merci, votre message a bien été envoyé !"
                        : "Thank you, your message has been sent!",
                    );
                  },
                  () => {
                    setError(
                      lang === "FR"
                        ? "Erreur lors de l'envoi, réessayez plus tard."
                        : "Sending failed, please try again later.",
                    );
                    setLoading(false);
                  },
                );
            }}
            className="text-sm font-medium"
          >
            <label htmlFor="name">{lang === "FR" ? "Nom" : "Name"}</label>
            <Input
              type="text"
              name="name"
              placeholder={lang === "FR" ? "Votre nom" : "Your name"}
              required
            />
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              placeholder={
                lang === "FR"
                  ? "votre.email@example.com"
                  : "your.email@example.com"
              }
              required
            />
            <label htmlFor="subject">
              {lang === "FR" ? "Sujet" : "Subject"}
            </label>
            <Input
              type="text"
              name="subject"
              placeholder={
                lang === "FR" ? "Sujet du message" : "Message subject"
              }
              required
            />
            <label htmlFor="message">Message</label>
            <FieldBox>
              <textarea
                name="message"
                placeholder={
                  lang === "FR" ? "Votre message..." : "Your message..."
                }
                className="px-4 py-3 w-full min-h-12"
                rows={5}
                required
              />
            </FieldBox>
            <Button
              type="submit"
              className="mt-8 w-full justify-center"
              disabled={loading}
            >
              <SendIcon className="w-4.5 h-4.5" />
              {loading
                ? lang === "FR"
                  ? "Envoi..."
                  : "Sending..."
                : lang === "FR"
                  ? "Envoyer"
                  : "Send"}
            </Button>
            {error && <p className="text-red-600 text-center mt-4">{error}</p>}
          </form>
        </Card>
      </div>
    </>
  );
}
