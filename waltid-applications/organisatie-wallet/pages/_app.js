import Layout from "@/components/layout";
import "@/styles/globals.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Router, useNavigate } from "react-router-dom";

export default function App({ Component, pageProps }) {

  return <Layout><Component {...pageProps} /></Layout>;
}
