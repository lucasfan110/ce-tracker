import { useState } from "react";
import Input, { InputProps } from "./Input";
import "./TagInput.scss";

interface Props extends InputProps {
    tags: string[];
    onTagsChange: (tags: string[]) => void;
}

export default function TagInput({ tags, onTagsChange, ...props }: Props) {
    const [inputValue, setInputValue] = useState("");

    // Rendering the tags
    function renderTags() {
        return tags.map(tag => {
            return (
                <span key={tag} className="tag-input__tag">
                    {tag}
                    <button
                        onClick={() => removeTag(tag)}
                        type="button"
                        className="tag-input__tag-delete"
                    >
                        {/* The `X` icon for deleting tags */}
                        <i className="bi bi-x"></i>
                    </button>
                </span>
            );
        });
    }

    // Adds a tag to the tags array, based on what's inside the input
    function addTag() {
        // Check if input is empty
        if (!inputValue) {
            return;
        }

        // Check if tag already exist
        if (tags.includes(inputValue)) {
            // If it does, clear the input and pretend like nothing happened
            setInputValue("");
            return;
        }

        // Push the tag into the tags state
        onTagsChange([...tags, inputValue.trim()]);

        // Clear input
        setInputValue("");
    }

    /**
     * Removes a tag with `tagContent` in the `tags` array. If tag with `tagContent`
     * doesn't exist, then nothing happens
     */
    function removeTag(tagContent: string) {
        // Find the tag with index
        const tagIndex = tags.findIndex(value => value === tagContent);

        // No tag with that content, do nothing
        if (tagIndex === -1) {
            return;
        }

        // Filter out the tag on `tagIndex`
        onTagsChange(tags.filter((_, i) => i !== tagIndex));
    }

    // Check if enter key is clicked
    function handleInputKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key !== "Enter") {
            return;
        }

        // User clicked enter, add tag
        addTag();
    }

    return (
        <div className="tag-input">
            <span className="tag-input__tags">{renderTags()}</span>
            <Input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyUp={handleInputKeyUp}
                {...props}
            />
        </div>
    );
}
