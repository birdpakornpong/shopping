import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import styles from "./Product.module.scss";
interface Props {
  product?: Products;
}
export interface Products {
  id: number;
  barcode: string;
  name: string;
  valueBaht: number;
}

export default function Product({ product }: Props): ReactElement {
  const name = (product && product.name) || "สินค้าทดสอบ";
  const valueBaht = (product && product.valueBaht) || 99;

  return (
    <>
      <Card className="w-64">
        <CardHeader
          title={name}
          // subheader="September 14, 2016"
        />
        <CardMedia
          className={styles.media}
          image="/images/product/productTest.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "#00adb5" }}
            component="p"
            className="mt-3"
          >
            ราคา {valueBaht} บาท
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
