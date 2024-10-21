"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  country: string;
};

export default function RSVPSection({ country }: Props) {
  const [join, setJoin] = useState<boolean | null>(null);
  const [name, setName] = useState("");
  const [howMany, setHowMany] = useState(1);

  const translation = {
    en: {
        title: "Please let us know if you can join us on our special day.",
      cardTitle: "Confirm attendance",
      cardDesc:
        "For our planning, we kindly request your confirmation of attendance.",
        yes: 'Yes, I will attend',
        no: 'No, unfortunately, I am unable to attend.',
      name: "Name",
      howMany: "Number of participants",
      send: 'Send',
    },
    de: {
        title: "Bitte lasst uns wissen, ob ihr an unserem besonderen Tag dabei sein könnt.",
      cardTitle: "Teilnahme bestätigen",
      cardDesc:
        "Für unsere Planung bitten wir höflich um Eure Teilnahmebestätigung.",
        yes: 'Ja, ich nehme teil',
        no: 'Nein, ich bin leider verhindert',
      name: "Name",
      howMany: "Teilnehmerzahl",
      send: 'Senden',
    },
    fr: {
        title: "Veuillez nous faire savoir si vous pouvez être présents à notre journée spéciale.",
      cardTitle: "Confirmer la participation",
      cardDesc:
        "Pour notre organisation, nous vous prions de bien vouloir confirmer votre participation.",
        yes: 'Oui, je participerai',
        no: "Non, malheureusement, je suis dans l'incapacité de venir.",
      name: "Nom",
      howMany: "Nombre de participants",
      send: 'Envoyer',
    },
  } as const;

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="text-3xl underline font-lora">
        <span>RSVP</span>
      </div>
      <div className="font-quicksand text-balance text-center">
      {country === "en" && <span>{translation.en.title}</span>}
      {country === "de" && <span>{translation.de.title}</span>}
      {country === "fr" && <span>{translation.fr.title}</span>}
      </div>
      <div className="flex flex-col gap-6 font-quicksand text-xl">
        <Button
          className={`w-full join === true ? "bg-purple-200" : ""`}
          variant={"custom"}
          size={"lg"}
          onClick={() => {
            setJoin(true);
          }}
        >
            {
                country === 'en' && translation.en.yes
            }
            {
                country === 'de' && translation.de.yes
            }
            {
                country === 'fr' && translation.fr.yes
            } 
        </Button>
        <Button
          className={join === false ? "bg-purple-200" : ""}
          variant={"custom"}
          size={"lg"}
          onClick={() => {
            setJoin(false);
          }}
        >
            {
                country === 'en' && translation.en.no
            }
            {
                country === 'de' && translation.de.no
            }
            {
                country === 'fr' && translation.fr.no
            } 
        </Button>
        <Card
          className={`${
            join ? "opacity-100" : "opacity-0"
          } transition ease-in-out delay-200 duration-200 mt-6`}
        >
          <CardHeader>
            {country === "en" && (
              <>
                <CardTitle>{translation.en.cardTitle}</CardTitle>
                <CardDescription><span className="font-quicksand text-balance text-center"> {translation.en.cardDesc}</span></CardDescription>
              </>
            )}
            {country === "de" && (
              <>
                <CardTitle>{translation.de.cardTitle}</CardTitle>
                <CardDescription><span className="font-quicksand text-balance text-center"> {translation.de.cardDesc}</span></CardDescription>
              </>
            )}
            {country === "fr" && (
              <>
                <CardTitle>{translation.fr.cardTitle}</CardTitle>
                <CardDescription><span className="font-quicksand text-balance text-center"> {translation.fr.cardDesc}</span></CardDescription>
              </>
            )}
          </CardHeader>
          <CardContent>
            <form action="">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                {country === "en" && <Label htmlFor={"name"}>{translation.en.name}</Label>}
                {country === "de" && <Label htmlFor={"name"}>{translation.de.name}</Label>}
                {country === "fr" && <Label htmlFor={"name"}>{translation.fr.name}</Label>}
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                {country === "en" && <Label htmlFor={"howMany"}>{translation.en.howMany}</Label>}
                {country === "de" && <Label htmlFor={"howMany"}>{translation.de.howMany}</Label>}
                {country === "fr" && <Label htmlFor={"howMany"}>{translation.fr.howMany}</Label>}
                  <Input
                    value={howMany}
                    onChange={(e) => setHowMany(Number(e.target.value))}
                    id="howMany"
                  />
                </div>
              </div>
                {country === "en" && <Button variant={"custom"} type="submit" className="mt-6">{translation.en.send}</Button>}
                {country === "de" && <Button variant={"custom"} type="submit" className="mt-6">{translation.de.send}</Button>}
                {country === "fr" && <Button variant={"custom"} type="submit" className="mt-6">{translation.fr.send}</Button>}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
