<script lang="ts">
  let { show = true, progress = 0, total = 0 } = $props();
</script>

{#if show}
<div class="overlay" role="status" aria-live="polite">
  <div class="modal">
    <div class="spinner" aria-hidden="true"></div>
    <div class="text">Loading assets</div>
    <div class="progress">{progress}%{#if total} • {total} images{/if}</div>
  </div>
</div>
{/if}

<style>
  .overlay{
    position:fixed;
    inset:0;
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgba(0,0,0,0.6);
    z-index:9999;
  }
  .modal{
    background:var(--color-surface, #fff);
    color:var(--color-on-surface, #111);
    padding:1.25rem 1.5rem;
    border-radius:8px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:0.5rem;
    min-width:220px;
    box-shadow:0 6px 18px rgba(0,0,0,0.25);
  }
  .spinner{
    width:36px;
    height:36px;
    border-radius:50%;
    border:4px solid rgba(0,0,0,0.08);
    border-top-color:var(--color-primary, #e73);
    animation:spin 1s linear infinite;
  }
  @keyframes spin{to{transform:rotate(360deg)}}
  .text{font-weight:600}
  .progress{font-size:0.9rem;color:rgba(0,0,0,0.7)}
</style>
