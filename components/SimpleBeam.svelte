<script>
  let l = 22;
  let w = 1;
  let E = 29000;
  let Ix = 100;

  $: M = (w * l * l) / 8;
  $: V = (w * l) / 2;
  $: D = (5 * w * Math.pow(l, 4) * 1728) / (384 * E * Ix);
</script>

<style>
  table {
    width: 50%;
  }
  .container {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .txt {
    color: rgb(119, 0, 255);
  }
</style>

<div class="container">
<table>
 <tr>
    <td  colspan="3">
      <h2>SIMPLE BEAM</h2>
    </td>
  </tr>
  <tr>
    <td class="txt">Span</td>
    <td><input type="text" bind:value={l}></td>
    <td>ft</td>
  </tr>
  <tr>
    <td class="txt">Load</td>
    <td><input type="text" bind:value={w}></td>
    <td>k/ft</td>
  </tr>
  <tr>
    <td class="txt">E</td>
    <td><input type="text" bind:value={E}></td>
    <td>ksi</td>
  </tr>
  <tr>
    <td class="txt">Ix</td>
    <td><input type="text" bind:value={Ix}></td>
    <td>in^4</td>
  </tr>

  <tr>
    <td>M</td>
    <td>{M}</td>
    <td>k-ft</td>
  </tr>


  <tr>
    <td>V</td>
    <td>{V}</td>
    <td>k</td>
  </tr>

  <tr>
    <td>D</td>
    <td>{D}</td>
    <td>in</td>
  </tr>
</table>

</div>