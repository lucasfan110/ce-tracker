import classNames from "classnames";
import "./Tabs.scss";

export type Tab = {
    label: string;
    title: string;
    content: React.ReactNode;
};

interface Props {
    tabs: Tab[];
    activeTabLabel?: string;
    onTabSwitch?(tabLabel: string): void;
}

export default function Tabs({ tabs, activeTabLabel, onTabSwitch }: Props) {
    function renderTabNames() {
        return tabs.map(tab => {
            const isActive = tab.label === activeTabLabel;

            return (
                <button
                    key={tab.label}
                    className={classNames("tabs__title", {
                        "tabs__title--active": isActive,
                    })}
                    onClick={() => onTabSwitch?.(tab.label)}
                >
                    {tab.title}
                </button>
            );
        });
    }

    return (
        <div className="tabs">
            <div className="tabs__titles">{renderTabNames()}</div>
            <div className="tabs__content">
                {tabs.find(tab => tab.label === activeTabLabel)?.content}
            </div>
        </div>
    );
}
