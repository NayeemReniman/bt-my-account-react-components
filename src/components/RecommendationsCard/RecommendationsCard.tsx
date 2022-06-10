import { Heading } from "@arc-ui/components";
import { FunctionComponent } from "react";
import DashboardPanel from "../DashboardPanel";
import DashboardBanners from "../DashboardBanner";
import "./recommendationsCard.css";

export interface RecommendationsCardProps {
  children: React.ReactNode;
  cardTitle: string;
  bannerTitle: string;
  bannerBody: string;
  bannerhref: string;
  bannerLinktext: string;
  contentSize: string;
}

export const RecommendationsCard: FunctionComponent<RecommendationsCardProps> =
  ({
    children,
    cardTitle,
    bannerTitle,
    bannerBody,
    bannerLinktext,
    bannerhref,
    contentSize,
  }) => {
    return (
      <>
        <DashboardPanel header={<Heading size="m">{cardTitle}</Heading>}>
          <div className="recomendationcard__container">
            <div style={{ width: contentSize }}>{children}</div>
            <div>
              <DashboardBanners
                body={bannerBody}
                href={bannerhref}
                linktext={bannerLinktext}
                title={bannerTitle}
              ></DashboardBanners>
            </div>
          </div>
        </DashboardPanel>
      </>
    );
  };

export default RecommendationsCard;
