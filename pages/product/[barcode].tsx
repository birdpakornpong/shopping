import React, { ReactElement, useState } from "react";
import { useRouter } from "next/router";
import { Button, Container, ImageList, ImageListItem } from "@material-ui/core";
import { Products } from "../../components/ui/Product/Product";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import styles from "./[barcode].module.scss";

interface Props {
  product: Products;
}

export default function product({ product }: Props): ReactElement {
  const [quanlity, setQuanlity] = useState(0);

  const getNameProduct = () => {
    const name = product && product.name;
    return name;
  };

  const getBarcode = () => {
    const barcode = product && product.barcode;
    return barcode;
  };

  const getValueBaht = () => {
    const valueBaht = product && product.valueBaht;
    return valueBaht;
  };

  // ชุดข้อมูลสำหรับโชว์รูปภาพของสินค้าแต่ละตัว
  const itemData = [
    {
      img: "/images/product/productTest.jpg",
      title: "Image1",
      author: "author",
      featured: true,
    },
    {
      img: "/images/product/productTest.jpg",
      title: "Image2",
      author: "author",
      featured: false,
    },
    {
      img: "/images/product/productTest.jpg",
      title: "Image3",
      author: "author",
      featured: false,
    },
    {
      img: "/images/product/productTest.jpg",
      title: "Image4",
      author: "author",
      featured: false,
    },
    {
      img: "/images/product/productTest.jpg",
      title: "Image5",
      author: "author",
      featured: false,
    },
    {
      img: "/images/product/productTest.jpg",
      title: "Image6",
      author: "author",
      featured: true,
    },
  ];
  return (
    <div className="pt-16 pb-12 bg-gray-200">
      <Container>
        <div className="grid grid-rows-3 grid-cols-2 grid-flow-col gap-4">
          {/* ส่วนรูปภาพ  */}
          <div className="row-span-3 bg-white">
            <div className={styles.test}>
              <ImageList rowHeight={300} gap={1} className={styles.widthHigth}>
                {itemData.map((item) => {
                  return (
                    <ImageListItem
                      key={item.title}
                      cols={item.featured ? 2 : 1}
                      rows={item.featured ? 2 : 1}
                    >
                      <img
                        src="/images/product/productTest.jpg"
                        alt={item.title}
                        className="h-full"
                      />
                    </ImageListItem>
                  );
                })}
              </ImageList>
            </div>
          </div>
          <div className="col-span-1 bg-white h-full p-6">
            {/* ส่วนแสดงผลรายละเอียดสินค้า */}
            <div className="flex justify-between">
              <p className="text-3xl font-bold">{getNameProduct()}</p>
              <p className="text-lg pt-2">รหัสสินค้า : {getBarcode()}</p>
            </div>
            <p className="text-2xl my-3 h-auto">
              ราคา : {getValueBaht()} บาท / ชิ้น
            </p>
            <div className="flex justify-between">
              {/* ส่วนเลือกจำนวนสินค้า */}
              <div className="flex justify-center mt-4">
                <div
                  onClick={() => {
                    setQuanlity(quanlity - 1);
                  }}
                >
                  <RemoveCircleOutlineIcon
                    className={styles.iconRed}
                  ></RemoveCircleOutlineIcon>
                </div>

                <p className="text-5xl px-8">{quanlity}</p>
                <div
                  onClick={() => {
                    setQuanlity(quanlity + 1);
                  }}
                >
                  <AddCircleOutlineIcon
                    className={styles.iconGreen}
                  ></AddCircleOutlineIcon>
                </div>
              </div>
              <div className="mt-2">
                <Button
                  variant="contained"
                  className="p-4 text-lg"
                  startIcon={<ShoppingCartIcon />}
                >
                  นำเข้าตะกร้า
                </Button>
              </div>
            </div>
          </div>
          <div className="row-span-2 col-span-1 bg-white h-full p-6">
            {/* ส่วนรายละเอียดสินค้า */}
            <p className="text-2xl font-bold">รายละเอียดสินค้า</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const productsPath = [
    { barcode: "87541525" },
    { barcode: "87451269" },
    { barcode: "12254136" },
    { barcode: "48759633" },
    { barcode: "36289475" },
  ];

  // Get the paths we want to pre-render based on posts
  const paths = productsPath.map((post) => ({
    params: { barcode: post.barcode },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // ชุดข้อมูล product สำหรับมากรองหา product ของหน้านี้
  const products: Products[] = [
    { id: 1, barcode: "87541525", name: "กระท่อม", valueBaht: 250 },
    { id: 2, barcode: "87451269", name: "Gundam", valueBaht: 199 },
    { id: 3, barcode: "12254136", name: "Babylove", valueBaht: 28 },
    { id: 4, barcode: "48759633", name: "กัญชาแมว", valueBaht: 360 },
    { id: 5, barcode: "36289475", name: "เสื้อลายดอก", valueBaht: 50 },
  ];

  const [product] = products.filter((product) => {
    return product.barcode === params.barcode;
  });
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      product,
    },
  };
}
