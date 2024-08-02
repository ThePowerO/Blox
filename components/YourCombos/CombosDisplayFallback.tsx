import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Heart, Star } from "lucide-react";
import { Button } from "../ui/button";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TextGradient from "../HtmlComponents/TextGradient";
import { ReferencesSearchItems } from "./ComboFilter";
import { Input } from "../ui/input";
import { Skeleton } from "../ui/skeleton";
import { useTranslations } from "next-intl";

export default function CombosDisplayFallback() {
  const t = useTranslations("YourCombos");
  const FilterTypes = [
    `${t("Recent")}`,
    `${t("Old")}`,
    `${t("Likes")}`,
    `${t("Favorites")}`,
    `${t("Highlighted")}`,
  ];
  return (
    <>
      <section className="mb-6">
        <Input
          placeholder={t("searchPlaceholder")}
          className="w-full first-letter:border bg-white px-2 py-1.5 text-sm font-medium text-gray-900 placeholder-gray-400 focus:ring-0 dark:bg-[#212529] dark:text-white"
        />
        <div className="mt-[20px] flex flex-col gap-1">
          <div className="flex w-full tinymax:px-[10px] px-[40px] py-2 items-center border rounded-xl dark:border-none dark:bg-[#212529]">
            <div className="flex flex-wrap tinymax:gap-1 gap-4 items-center text-sm">
              <p className="text-zinc-400">{t("FilterBy")}</p>
              {FilterTypes.map((filterType) => (
                <span
                  key={filterType}
                  className={`cursor-pointer hover:bg-stone-200 dark:hover:bg-zinc-600
                    text-center border dark:border-black w-[60px] px-2 py-1 rounded-sm`}
                >
                  {filterType}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger>
              <Button className="flex items-center gap-1">
                {t("FilterViaReferences")} <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="" align="start">
              <ScrollArea className="w-[290px] petit:w-[360px] tiny:w-[400px] medium:w-[500px] sm:w-[650px] md:w-[780px] lg:w-[1024px] whitespace-nowrap rounded-md border">
                <div className="flex w-max space-x-2 p-2">
                  <div className="p-2 border flex flex-col gap-1 flex-wrap rounded-lg max-h-[460px]">
                    <TextGradient
                      text="Fighting Styles"
                      from="from-sky-500 font-bold"
                      via="via-cyan-800"
                      to="to-blue-800"
                    />
                    {Object.entries(ReferencesSearchItems.FightingStyles).map(
                      ([key, FightingStyles]) => (
                        <div key={FightingStyles}>
                          <input
                            value={FightingStyles}
                            type="checkbox"
                            id={FightingStyles}
                          />
                          <label htmlFor={FightingStyles}>
                            {FightingStyles}
                          </label>
                        </div>
                      )
                    )}
                  </div>
                  <div className="p-2 border flex flex-col gap-1 flex-wrap rounded-lg max-h-[460px]">
                    <TextGradient
                      text="Fruits"
                      from="from-yellow-500 font-bold"
                      via="via-brown-500"
                      to="to-pink-800"
                    />
                    {Object.entries(ReferencesSearchItems.Fruits).map(
                      ([key, Fruits]) => (
                        <div key={Fruits}>
                          <input type="checkbox" value={Fruits} id={Fruits} />
                          <label htmlFor={Fruits}>{Fruits}</label>
                        </div>
                      )
                    )}
                  </div>
                  <div className="p-2 border flex flex-col gap-1 flex-wrap rounded-lg max-h-[460px]">
                    <TextGradient
                      text="Swords"
                      from="from-purple-500 font-bold"
                      via="via-stone-500"
                      to="to-stone-900"
                    />
                    {Object.entries(ReferencesSearchItems.Swords).map(
                      ([key, Swords]) => (
                        <div key={Swords}>
                          <input type="checkbox" value={Swords} id={Swords} />
                          <label htmlFor={Swords}>{Swords}</label>
                        </div>
                      )
                    )}
                  </div>
                  <div className="p-2 border flex flex-col gap-1 flex-wrap rounded-lg max-h-[460px]">
                    <TextGradient
                      text="Weapons"
                      from="from-green-500 font-bold"
                      via="via-green-700"
                      to="to-green-800"
                    />
                    {Object.entries(ReferencesSearchItems.Weapons).map(
                      ([key, Weapons]) => (
                        <div key={Weapons}>
                          <input type="checkbox" value={Weapons} id={Weapons} />
                          <label htmlFor={Weapons}>{Weapons}</label>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
      <section className="flex flex-col gap-x-2 850px:grid 850px:grid-cols-2 gap-y-4">
        <ComboSkeletonFallback />
        <ComboSkeletonFallback />
        <ComboSkeletonFallback />
        <ComboSkeletonFallback />
      </section>
    </>
  );
}

export const ComboSkeletonFallback = () => {
  return (
    <div
      className={`flex relative cursor-pointer petit:h-[140px] medium:h-[182px] border transition hover:shadow-xl`}
    >
      <div className="hidden tiny:block rotate-180 [writing-mode:_vertical-lr]">
        <time
          dateTime={"0101-01-01"}
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-200 dark:text-white"
        >
          <span>0101-01-01</span>
          <span className="w-px flex-1 bg-gray-900/10 dark:bg-white"></span>
          <span>{""}</span>
        </time>
      </div>
      <div className="grid gap-2 grid-cols-2 sm:hidden">
        <Skeleton className="h-full w-[60px] medium:h-full medium:w-[90px]" />
        <Skeleton className="h-full w-[60px] medium:h-full medium:w-[90px]" />
        <Skeleton className="h-full w-[60px] medium:h-full medium:w-[90px]" />
        <Skeleton className="h-full w-[60px] medium:h-full medium:w-[90px]" />
      </div>
      <div className="hidden gap-3 sm:grid sm:grid-cols-2">
        <Skeleton className="border medium:h-full medium:w-[90px]" />
        <Skeleton className="border medium:h-full medium:w-[90px]" />
        <Skeleton className="border medium:h-full medium:w-[90px]" />
        <Skeleton className="border medium:h-full medium:w-[90px]" />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-2 sm:border-l-transparent sm:p-2">
          <Skeleton className="font-bold h-[20px] w-full" />
          <Skeleton className="mt-3 h-[20px] w-full" />
          <Skeleton className="mt-1 h-[20px] w-full" />
        </div>
        <div className="flex w-full medium:items-end medium:justify-end">
          <div className="flex gap-2 flex-1 ml-2">
            <Skeleton className="h-[30px] w-[30px]" />
            <div className="justify-center">
              <div className="flex items-center gap-[5px]">
                <div className="mt-1 flex gap-1">
                  <Star fill="#e5e7eb" size={18} className="text-gray-200" />
                </div>
                <div className="mt-1 flex gap-1">
                  <Heart fill="#e5e7eb" size={18} className="text-gray-200" />
                </div>
              </div>
            </div>
          </div>
          <Skeleton className="hidden petit:block p-2 tiny:w-[110px] tiny:h-[40px] " />
        </div>
      </div>
    </div>
  );
};
