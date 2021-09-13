import React, { ReactElement, useState } from "react";
import MainBanner from "../components/banner/MainBanner";
import Container from "../components/ui/Container/Container";
import Shelf from "../components/ui/Shelf/Shelf";
import Product, { Products } from "../components/ui/Product/Product";
import styles from "./index.module.scss";
import { Link, Modal } from "@material-ui/core";

interface Props {}

export default function index({}: Props): ReactElement {
  function getModalStyle() {
    const top = 49;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-50%, -50%)`,
    };
  }

  const products: Products[] = [
    { id: 1, barcode: "87541525", name: "กระท่อม", valueBaht: 250 },
    { id: 2, barcode: "87451269", name: "Gundam", valueBaht: 199 },
    { id: 3, barcode: "12254136", name: "Babylove", valueBaht: 28 },
    { id: 4, barcode: "48759633", name: "กัญชาแมว", valueBaht: 360 },
    { id: 5, barcode: "36289475", name: "เสื้อลายดอก", valueBaht: 50 },
  ];

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = useState(false);
  const [productModal, setProductModal] = useState<Products>({
    id: 1,
    barcode: "testbarcode",
    name: "productTest",
    valueBaht: 99,
  });

  const handleOpen = (product: Products) => {
    setProductModal(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={getModalStyle()} className={styles.testScss}>
      <h2 id="simple-modal-title">name product = {productModal.name}</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  return (
    <>
      <MainBanner />
      <div className="pt-5 pb-5 bg-gray-200">
        {/* <Container>
          <p className="text-xl text-gray-500">สินค้าแนะนำ</p>
        </Container> */}
        <Shelf>
          <Container>
            <div className="flex flex-wrap">
              {products.map((product) => {
                const link = `/product/${product.barcode}`;
                return (
                  <div
                    // onClick={() => {
                    //   handleOpen(product);
                    // }}
                    key={product.barcode}
                    className="mr-8 mb-8"
                  >
                    <Link href={link} className="no-underline">
                      <Product product={product} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </Container>
        </Shelf>
        {/* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal> */}
      </div>
    </>
  );
}
