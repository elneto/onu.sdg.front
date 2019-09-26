import React from "react";

 
import Header from "../components/header";
import FooterV2 from "../components/FooterV2";
import JumbotronActionNetworks from "../components/Jumbotron/JumbotronActionNetworks";
import ContentModule04 from "../components/ContentModules/ContentModule-04";
import BodyContent from "../components/bodyContent";

const PageActionNetworks = () => (
  <>
    {/* <SEO title="Action Networks" /> */}
    <Header />
    <JumbotronActionNetworks />
    <main>
      <section className="container">
        <BodyContent className="border-bottom pb-5 mb-5 mt-5 separator-top">
          <p>
            Action Networks for SDGs are action-oriented networks that are
            maintained by other UN system entities or actors that focus on
            accelerating progress in certain sustainable development thematic
            areas, typically contributing to multiple interlinked SDGs.
          </p>
          <p>
            Action networks are useful in mobilizing resources, generating
            momentum and creating awareness, spurring tangible results in
            support of the objectives of the network, scaling up existing
            initiatives or catalyzing new SMART commitments and actions.
          </p>
          <p>
            Durable Action Networks are usually of multi-stakeholder nature,
            with an established governance structure and a relatively robust
            accountability framework. Some most durable Action Networks, such as
            the network for Small Island Developing States, are evolving
            together with the relevant intergovernmental processes or
            conferences.
          </p>
        </BodyContent>
      </section>
      <section className="container mb-5">
        <div className="row row-spacing">
          {[...Array(12)].map(event => (
            <ContentModule04 />
          ))}
        </div>
      </section>
    </main>
    <FooterV2 />
  </>
);

export default PageActionNetworks;
