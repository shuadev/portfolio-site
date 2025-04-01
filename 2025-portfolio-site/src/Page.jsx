import { Fragment } from "react";
import NavBar from "./components/NavBar";
import SVGs from "./components/Footer";
import "./index.css";
import Card from "./components/Card";

export default function Page({ title, onPageChange }) {
  return (
    <Fragment className="flex flex-col ">
      <NavBar title={title} onPageChange={onPageChange} />
      <main className="page-main">
        <Card cardTitle="talk about this site">
          <p>
            can talk about building this site and maybe go into cool features in
            it - the background or header in particular if you go that route.
            maybe talk about your graphic design background and how much you
            like design and being creative, to add a bit to why you do frontend
            <br />
            can talk about styling choices tie in with HTML? talk about how you
            got started (web dev course)
          </p>
        </Card>
      </main>
      <SVGs />
    </Fragment>
  );
}
