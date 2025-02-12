import { Container, Title } from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";
import { Filters } from "@/components/shared/filters";
import Link from "next/link";
import Image from "next/image";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />
      {/* <div style={{ height: "3000px" }} /> */}

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Завтраки"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
