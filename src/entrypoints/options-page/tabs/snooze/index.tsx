import { LockedSettingsOverlay, SettingsLockFooter } from "../../lock";

export const SnoozeTabContent = () => {
	return (
		<div>
			<div class="p-4 space-y-4 overlay-container">
				<p class="text-secondary">Snooze is fixed at 5 minutes.</p>
				<LockedSettingsOverlay />
			</div>
			<SettingsLockFooter />
		</div>
	);
};
