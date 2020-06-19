<script>
import Masonry from "../classes/clsMasonry.js";

let input ={
    	h : 12,
		w : 8,
		fm : 2500,
		fy : 60,
		sb : 32,
		rebar : "#5",
		location : "center"

}

$: CMU = new Masonry(input)
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

    .txtOutput {
        color: rgb(255, 0, 0);
    }

    .txtResult{
        font-size: 2em;
        font-weight:bold;
        color: rgba(0, 0, 0,0.7);
    }
</style>

<div class="container">
<table>
    <thead>
        <tr>
            <td  colspan="3">
            <h2>MASONRY WALL</h2>
            </td>
        </tr>
        <tr>
            <td class="txt">t</td>
            <td><input type="text" bind:value={input.w}></td>
            <td>in</td>
        </tr>
        <tr>
            <td class="txt">h</td>
            <td><input type="text" bind:value={input.h}></td>
            <td>ft</td>
        </tr>
        <tr>
            <td class="txt">fm</td>
            <td><input type="text" bind:value={input.fm}></td>
            <td>psi</td>
        </tr>
        <tr>
            <td class="txt">Fy</td>
            <td><input type="text" bind:value={input.fy}></td>
            <td>ksi</td>
        </tr>
        <tr>
            <td class="txt">Sb</td>
            <td><input type="text" bind:value={input.sb}></td>
            <td>in</td>
        </tr>
        <tr>
            <td class="txt">Rebar</td>
            <td><input type="text" bind:value={input.rebar}></td>
            <td></td>
        </tr>
        <tr>
            <td class="txt">Location</td>
            <td><input type="text" bind:value={input.location}></td>
            <td></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>b</td>
            <td class="txtOutput">{CMU.b()}</td>
            <td>in</td>
        </tr>
        <tr>
            <td>d</td>
            <td class="txtOutput">{CMU.d()}</td>
            <td>in</td>
        </tr>
        <tr>
            <td>Es</td>
            <td class="txtOutput">{CMU.Es}</td>
            <td>ksi</td>
        </tr>
        <tr>
            <td>Em</td>
            <td class="txtOutput">{CMU.Em()}</td>
            <td>ksi</td>
        </tr>
        <tr>
            <td>n</td>
            <td class="txtOutput">{(CMU.n()).toFixed(2)}</td>
            <td></td>
        </tr>
        <tr>
            <td>As</td>
            <td class="txtOutput">{(CMU.Ab()).toFixed(2)}</td>
            <td>in^2</td>
        </tr>
        <tr>
            <td>rho</td>
            <td class="txtOutput">{(CMU.rho()).toFixed(4)}</td>
            <td></td>
        </tr>
        <tr>
            <td>k</td>
            <td class="txtOutput">{(CMU.k()).toFixed(4)}</td>
            <td></td>
        </tr>
         <tr>
            <td>j</td>
            <td class="txtOutput">{(CMU.j()).toFixed(4)}</td>
            <td></td>
        </tr>
        <tr>
            <td>Fb</td>
            <td class="txtOutput">{(CMU.Fb()).toFixed(0)}</td>
            <td>psi</td>
        </tr>
        <tr>
            <td>Fs</td>
            <td class="txtOutput">{(CMU.Fs()).toFixed(0)}</td>
            <td></td>
        </tr>
        <tr class="txtResult">
            <td>Mm</td>
            <td>{(CMU.Mm()).toFixed(0)}</td>
            <td>lb-ft</td>
        </tr>
        <tr class="txtResult">
            <td>Ms</td>
            <td >{(CMU.Ms()).toFixed(0)}</td>
            <td>lb-ft</td>
        </tr>
    </tbody>
</table>

</div>