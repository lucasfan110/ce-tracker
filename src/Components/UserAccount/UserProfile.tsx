import { useEffect, useRef, useState } from "react";
import { User, getUserInitials } from "../../types/User";
import "./UserProfile.scss";
import UserProfileDropdown from "./UserProfileDropdown";

interface Props {
    user: User;
}

export default function UserProfile({ user }: Props) {
    const [dropdownDisplay, setDropdownDisplay] = useState<"none" | "flex">(
        "none"
    );
    const [isClickedOpen, setIsClickedOpen] = useState(false);
    const profilePictureDiv = useRef<HTMLDivElement>(null);
    const dropdownComponent = useRef<HTMLDivElement>(null);

    function handlePFPMouseOver() {
        if (!isClickedOpen) {
            setDropdownDisplay("flex");
        }
    }

    function handlePFPMouseOut() {
        if (!isClickedOpen) {
            setDropdownDisplay("none");
        }
    }

    // When user clicks outside of profile picture or dropdown when dropdown is opened
    useEffect(() => {
        function handleDocumentClick(event: MouseEvent) {
            if (!(event.target instanceof Node)) {
                return;
            }

            const target = event.target as Node;

            if (
                !profilePictureDiv.current?.contains(target) &&
                !dropdownComponent.current?.contains(target)
            ) {
                setIsClickedOpen(false);
                setDropdownDisplay("none");
            }
        }

        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    return (
        <div className="user-profile">
            <div
                className="user-profile__profile-picture"
                onMouseOver={handlePFPMouseOver}
                onMouseOut={handlePFPMouseOut}
                onMouseDown={() => setIsClickedOpen(true)}
                ref={profilePictureDiv}
            >
                {getUserInitials(user)}
            </div>
            {/* <div
                className="user-profile__dropdown"
                onMouseOver={handlePFPMouseOver}
                onMouseOut={handlePFPMouseOut}
                style={{ display: dropdownDisplay }}
                ref={dropdownDiv}
            >
                <h3>{`${user.firstName} ${user.lastName}`}</h3>
            </div> */}
            <UserProfileDropdown
                user={user}
                onMouseOver={handlePFPMouseOver}
                onMouseOut={handlePFPMouseOut}
                style={{ display: dropdownDisplay }}
                ref={dropdownComponent}
            />
        </div>
    );
}
