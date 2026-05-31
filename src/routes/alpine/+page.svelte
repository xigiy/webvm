<script>
import WebVM from '$lib/WebVM.svelte';
import * as configObj from '/config_public_alpine';
import { tryPlausible } from '$lib/plausible.js';
function handleProcessCreated(processCount)
{
	// Log only the first process, as a proxy for successful startup
	if(processCount == 1)
	{
		tryPlausible("Alpine init");
	}
}
</script>

<WebVM configObj={configObj} processCallback={handleProcessCreated} cacheId="blocks_alpine">
	<p>切换到Debian原版：<a class="underline" href="/" target="_blank">Debian Linux</a> terminal-based WebVM</p>
</WebVM>
