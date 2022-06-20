import { Heading, Text, Icon, Align } from "@arc-ui/components";
import { FunctionComponent } from "react";
import { NotificationTypes } from "../NotificationDrawer";
import StatusLabel from "../StatusLabel";
import { StatusLabelProps } from "../StatusLabel/StatusLabel";
import "./notificationItem.css";

export interface NotificationItemProps {
  notificationType: NotificationTypes;
  shortDescription: string;
  title: string;
  body: string;
  statusLabel: StatusLabelProps;
  manageNotificationLinkAction: () => void;
  manageNotificationLinkText: string;
  manageNotificationIcon: string;
  snoozeAction: () => void;
  readAction: () => void;
}

const NotificationItem: FunctionComponent<NotificationItemProps> = ({
  shortDescription,
  title,
  body,
  manageNotificationLinkAction,
  manageNotificationLinkText,
  manageNotificationIcon,
  readAction,
  snoozeAction,
  statusLabel,
}) => {
  return (
    <div className="notification__container">
      <div className="notification__content__container">
        <div className="notification__content__heading">
          <Heading size="xs">{shortDescription}</Heading>
          <Heading size="l">{title}</Heading>
        </div>
        <div className="notification__content__body">
          <Text size="m">{body}</Text>
        </div>
        <div className="notification__content__actions">
          <div key="action">
            <a href="#">
              <Text size="s">
                <Icon size={12} icon={manageNotificationIcon} isInline />{" "}
                {manageNotificationLinkText}
              </Text>
            </a>
          </div>
          <div key="status-label">
            <StatusLabel color={statusLabel.color} text={statusLabel.text} />
          </div>
        </div>
      </div>
      <div className="notification__actions__container">
        <div
          className="notification__actions__snooze__container"
          onClick={() => snoozeAction()}
        >
          <Align vertical="center">
            <Icon icon="btNotification" size={32} isInline />
          </Align>
        </div>
        <div
          className="notification__actions__complete__container"
          onClick={() => readAction()}
        >
          <Align vertical="center">
            <Icon icon="btThumbsUp" size={32} isInline />
          </Align>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
