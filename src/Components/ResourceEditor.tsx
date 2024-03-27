import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import "./ResourceEditor.scss";
import { Resource } from "../types/Company";
import ErrorMessage from "./ErrorMessage";
import { Link } from "react-router-dom";

type ResourceCardProps = Resource & {
    onDelete: (resource: Resource) => void;
};

function ResourceCard({ name, link, onDelete }: ResourceCardProps) {
    return (
        <div className="resource-card">
            <p className="resource-card__name">{name}</p>
            <Link className="resource-card__link" to={link} target="_blank">
                {link}
            </Link>
            <Button
                className="resource-card__delete"
                onClick={() => onDelete({ name, link })}
                type="button"
            >
                <i className="bi bi-trash"></i>
            </Button>
        </div>
    );
}

type ResourceEditorProps = {
    resources: Resource[];
    setResources: (resources: Resource[]) => void;
};

export default function ResourceEditor({
    resources,
    setResources,
}: ResourceEditorProps) {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [showNameErrorMessage, setShowNameErrorMessage] = useState(false);
    const [showLinkErrorMessage, setShowLinkErrorMessage] = useState(false);

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);

        if (e.target.value) {
            setShowNameErrorMessage(false);
        } else {
            setShowNameErrorMessage(true);
        }
    }

    function handleLinkChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLink(e.target.value);

        if (e.target.value) {
            setShowLinkErrorMessage(false);
        } else {
            setShowLinkErrorMessage(true);
        }
    }

    function addResource() {
        if (!name || !link) {
            setShowNameErrorMessage(!name);
            setShowLinkErrorMessage(!link);
            return;
        }

        setResources([...resources, { name, link }]);
        setName("");
        setLink("");
    }

    function renderResourceCards() {
        console.log(resources);
        return resources.map((resource, index) => (
            <ResourceCard
                {...resource}
                key={index}
                onDelete={() =>
                    setResources(resources.filter((_, i) => i !== index))
                }
            />
        ));
    }

    return (
        <div className="resource-editor">
            {renderResourceCards()}
            <div className="resource-editor__input-container">
                <Input
                    placeholder="Resource name..."
                    value={name}
                    onChange={handleNameChange}
                />
                <ErrorMessage
                    className="resource-editor__error-message"
                    show={showNameErrorMessage}
                >
                    Name cannot be empty!
                </ErrorMessage>
            </div>

            <div className="resource-editor__input-container">
                <Input
                    placeholder="Resource link..."
                    value={link}
                    onChange={handleLinkChange}
                />
                <ErrorMessage
                    className="resource-editor__error-message"
                    show={showLinkErrorMessage}
                >
                    Link cannot be empty!
                </ErrorMessage>
            </div>

            <Button variation="primary" onClick={addResource} type="button">
                Add Resource
            </Button>
        </div>
    );
}
