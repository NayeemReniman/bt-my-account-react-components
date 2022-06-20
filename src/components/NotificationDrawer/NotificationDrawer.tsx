import {
  Align,
  Button,
  Heading,
  Icon,
  Text,
  VerticalSpace,
} from "@arc-ui/components";

import { FunctionComponent, useEffect, useState } from "react";
import DashboardBanner from "../DashboardBanner";
import { DashboardBannerProps } from "../DashboardBanner/DashboardBanner";
import DashboardPanel from "../DashboardPanel";
import Highlighter from "../Highlighter";
import NotificationItem, {
  NotificationItemProps,
} from "../NotificationItem/NotificationItem";

import "./notificationDrawer.css";

export type NotificationTypes = "todo" | "complete" | "snoozed";
export interface NotificationDrawerProps {
  insights: DashboardBannerProps[];
  notifications: NotificationItemProps[];
}

const NotificationDrawer: FunctionComponent<NotificationDrawerProps> = ({
  insights,
  notifications,
}) => {
  const [activeNotficationType, setactiveNotficationType] =
    useState<NotificationTypes>("todo");

  const notificationMenus: {
    title: string;
    icon: string;
    code: NotificationTypes;
  }[] = [
    { code: "todo", icon: "btAlert", title: "To-do" },
    { code: "complete", icon: "", title: "Complete" },
    { code: "snoozed", icon: "btNotification", title: "Snoozed" },
  ];
  const [sortedNotfications, setsortedNotfications] = useState<
    {
      [code in NotificationTypes]: NotificationItemProps[];
    }
  >({
    todo: [],
    complete: [],
    snoozed: [],
  });

  useEffect(() => {
    const temp = { ...{}, ...sortedNotfications };
    notifications.forEach((notification) => {
      temp[notification.notificationType].push(notification);
    });
    setsortedNotfications(temp);
  },[notifications]);

  return (
    <DashboardPanel
      header={
        <>
          <div className="notifications__heading">
            <Heading size="m">
              You have{" "}
              <Highlighter>
                {sortedNotfications[activeNotficationType].length}
              </Highlighter>{" "}
              actions {activeNotficationType}
            </Heading>
            <VerticalSpace size="12" />
            <Text size="m">Thursday 16 September</Text>
          </div>
          <div className="notifications__button__continer">
            <Align horizontal="right">
              <Button
                label="Recent notifications"
                icon="btNotification"
                fill="solid"
                onClick={() => console.log("Iam clicked on notificationDrawer")}
              />
            </Align>
          </div>
        </>
      }
    >
      <div className="notifications__drawer">
        <div className="notifications__container">
          <DashboardPanel
            header={notificationMenus.map((nt) => (
              <div
                className={`notifications___menu__item ${
                  activeNotficationType === nt.code && "selected"
                }`}
                key={nt.code}
                onClick={() => setactiveNotficationType(nt.code)}
              >
                <div>
                  <Icon icon={nt.icon} isInline size={24} />
                </div>
                <div>
                  <Text isInline size="l">
                    {nt.title}
                  </Text>
                </div>
                <div>
                  <Text isInline size="m">
                    <Highlighter
                      rounded
                      backgroundColor={
                        activeNotficationType == nt.code ? "#5514b4" : "#808080"
                      }
                    >
                      {sortedNotfications[nt.code].length}
                    </Highlighter>
                  </Text>
                </div>
              </div>
            ))}
          >
            <div className="notifications__wrapper">
              {sortedNotfications[activeNotficationType].map((notification) => (
                <NotificationItem
                  notificationType={notification.notificationType}
                  body={notification.body}
                  shortDescription={notification.shortDescription}
                  title={notification.title}
                  manageNotificationLinkAction={
                    notification.manageNotificationLinkAction
                  }
                  manageNotificationLinkText={
                    notification.manageNotificationLinkText
                  }
                  manageNotificationIcon={notification.manageNotificationIcon}
                  readAction={notification.readAction}
                  statusLabel={notification.statusLabel}
                  snoozeAction={notification.snoozeAction}
                />
              ))}
            </div>
          </DashboardPanel>
        </div>
        <div className="notification__insights__container">
          <DashboardPanel
            header={
              <Heading size="m">
                <Icon icon="btWizard" isInline size={32} color="brand" />
                Insights
              </Heading>
            }
          >
            <div className="banners__container">
              {insights.map((insight) => (
                <DashboardBanner
                  body={insight.body}
                  title={insight.title}
                  href={insight.href}
                  linktext={insight.linktext}
                />
              ))}
            </div>
          </DashboardPanel>
        </div>
      </div>
    </DashboardPanel>
  );
};

export default NotificationDrawer;
