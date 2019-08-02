import { Div } from "utils/components";
import { addPrefix } from "utils/tools/addPrefix";
import { languages } from "utils/data/languages";

const { __ } = wp.i18n;
const { BaseControl, ToggleControl, TextControl, RadioControl } = wp.components;

export const ControlLanguageLabel: React.ComponentType<
	BlockPropsEdit
> = props => {
	const { attributes, setAttributes } = props;
	const { label_enabled, label, label_type, language } = attributes;

	return (
		<Div classes="control-container">
			<BaseControl
				id={addPrefix("control-label_enabled")}
				className={addPrefix("control")}
				label={__("Label")}
			>
				<ToggleControl
					className={addPrefix("control-toggle")}
					label={label_enabled ? __("Active") : __("Not active")}
					checked={label_enabled}
					help={__(
						"If this option is selected the block will display a label (by default the code language) on its top left corner."
					)}
					onChange={(label_enabled: Attributes["label_enabled"]) =>
						setAttributes({
							label_enabled
						})
					}
				/>
			</BaseControl>
			<RadioControl
				label={__("Label type")}
				className={addPrefix([
					"control",
					"control-radio",
					label_enabled ? "is_active" : "no-is_active"
				])}
				selected={label_type}
				onChange={label_type => {
					setAttributes({ label_type });

					if (label_type === "language") {
						const language_obj = languages.find(
							({ value }) => value === language
						);

						if (language_obj) {
							setAttributes({ label: language_obj.label });
						}
					}
				}}
				options={[
					{
						value: "language",
						label: __("Current code language")
					},
					{
						value: "custom",
						label: __("Custom text")
					}
				]}
			/>
			<TextControl
				className={addPrefix([
					"control",
					"control-text",
					label_enabled && label_type === "custom"
						? "is_active"
						: "no-is_active"
				])}
				value={label}
				onChange={label => setAttributes({ label })}
			/>
		</Div>
	);
};