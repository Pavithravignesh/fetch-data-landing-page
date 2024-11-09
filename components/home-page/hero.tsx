// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";

// Asset imports
import Placeholder from "@/public/placeholder.webp";
import CodeExample from "./code-example";
import PackageExample from "./pack-example";
import Sample from "./sample";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href="https://www.npmjs.com/package/@pvs-package/fetch-data">
              npm i @pvs-package/fetch-data <ArrowRight className="w-4" />
            </Link>
          </Button>
          <h1>
            <Balancer>
              Data fetching hook
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
              Components will receive a continuous, automated stream of data updates, ensuring the UI remains consistently fast and highly responsive.
            </Balancer>
          </h3>
          <br />
          <h3 className="text-muted-foreground">
            <Sample />
          </h3>
          <br />
          <h3 className="text-muted-foreground">
            <Balancer>
              Pass a URL and fetcher function to receive response data, error status, loading state, and revalidation.
            </Balancer>
          </h3>
          <br />
          <h3 className="text-muted-foreground">
            <CodeExample />
          </h3>
          <br />
          <h3 className="text-muted-foreground">
            <Balancer>
              Give a try here!
            </Balancer>
          </h3>
          <br />
          <h3 className="text-muted-foreground">
            <PackageExample />
          </h3>
          <br />
          <h2>
            <Balancer>
              Cache
            </Balancer>
          </h2>
          <h3 className="text-muted-foreground">
            <Balancer>
              Cache management stores fetched data to reuse it for future requests, so if the same data is requested again, it can be retrieved from the cache instead of making a new network call.
            </Balancer>
          </h3>
          <br />
          <h2>
            <Balancer>
              Deduplication
            </Balancer>
          </h2>
          <h3 className="text-muted-foreground">
            <Balancer>
              Deduplication prevents duplicate network requests by allowing only one request per URL at a time, so multiple calls for the same data wait for the first request to finish.            </Balancer>
          </h3>
          <br />
          <h2>
            <Balancer>
              It&#39;s either isLoading or revaildation:
            </Balancer>
          </h2>
          <h3 className="text-muted-foreground">
            <Balancer>
              <h4><p>isLoading</p></h4>isLoading indicates whether a request is currently in progress. It’s typically set to true at the start of a fetch and false when the data arrives (or an error occurs).
            </Balancer>
          </h3>
          <h3 className="text-muted-foreground">
            <Balancer>
              <h4><p>revaildation</p></h4>Revalidation ensures the data remains fresh by refetching it at intervals or in response to specific triggers (like the user revisiting a page).
            </Balancer>
          </h3>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
