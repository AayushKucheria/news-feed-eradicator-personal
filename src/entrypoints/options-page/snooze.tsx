import { Show, type ParentComponent } from "solid-js";
import { displayDuration } from "../../lib/time";
import { useOptionsPageState } from "./state";
import { MINUTE } from "/lib/time";

const InstantSnoozeButton: ParentComponent<{ ms: number, primary?: boolean }> = ({ms, primary, children}) => {
	const state = useOptionsPageState();

	const onClick = async () => {
		await state.startSnooze(ms);
	}

	return <button class={`${primary ? 'primary' : 'tertiary'} font-lg p-4`} onClick={onClick}>{children}</button>
}

const InstantSnoozeButtons = () => {
	return <div class="flex gap-2 cross-center card outlined shadow p-4">
		<div class="text-secondary">Snooze for</div>
		<InstantSnoozeButton primary ms={5 * MINUTE}>5m</InstantSnoozeButton>
	</div>
}

export const Snooze = () => {
	const state = useOptionsPageState();

	const isSnoozing = () => {
		const snoozeState = state.snoozeState.get();
		return snoozeState != null && snoozeState > state.clock.get();
	}

	return <div>
		<Show when={!isSnoozing()}>
			<div class="flex axis-center">
				<InstantSnoozeButtons />
			</div>
		</Show>

		<Show when={isSnoozing()}>
			<div class="flex cross-center p-4 card secondary outlined shadow">
				<div class="flex-1">
					💤 Snoozing for {displayDuration((state.snoozeState.get()! - state.clock.get()))}. Scroll your life away!
				</div>
				<button class="secondary" onClick={() => state.cancelSnooze()}>
					Cancel snooze
				</button>
			</div>
		</Show>
	</div>
}
