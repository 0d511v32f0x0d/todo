<style>
    .todo {
        display: grid;
        grid-template-columns: 2rem 1fr 2rem;
        grid-gap: 0.5rem;
        align-items: center;
        margin: 0 0 0.5rem 0;
        padding: 0.5rem;
        background-color: white;
        border-radius: 8px;
        filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
        transform: translate(-1px, -1px);
        transition: filter 0.2s, transform 0.2s;
    }
    
    .todo button {
        width: 2em;
        height: 2em;
        border: none;
        background-color: transparent;
        background-position: 50% 50%;
        background-repeat: no-repeat;
    }

    .todo input {
        flex: 1;
        padding: 0.5em 2em 0.5em 0.8em;
        border-radius: 3px;
    }

    button.toggle {
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        box-sizing: border-box;
        background-size: 1em auto;
    }

    .text {
        position: relative;
        display: flex;
        align-items: center;
        flex: 1;
    }

    .save {
        position: absolute;
        right: 0;
        opacity: 0;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cdefs%3E%3Cstyle%3E.fa-secondary%7Bopacity:.4%7D%3C/style%3E%3C/defs%3E%3Cpath class='fa-primary' d='M288 352c0 35.34-28.66 64-64 64s-64-28.66-64-64s28.66-64 64-64S288 316.7 288 352z'/%3E%3Cpath class='fa-secondary' d='M433.1 129.1l-83.9-83.9C342.3 38.32 327.1 32 316.1 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V163.9C448 152.9 441.7 137.7 433.1 129.1zM224 416c-35.34 0-64-28.66-64-64s28.66-64 64-64s64 28.66 64 64S259.3 416 224 416zM320 208C320 216.8 312.8 224 304 224h-224C71.16 224 64 216.8 64 208v-96C64 103.2 71.16 96 80 96h224C312.8 96 320 103.2 320 112V208z'/%3E%3C/svg%3E");
    }

    .todo input:focus + .save,
    .save:focus {
        transition: 0.2s;
        opacity: 1;
    }

    .delete {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cdefs%3E%3Cstyle%3E.fa-secondary%7Bopacity:.4%7D%3C/style%3E%3C/defs%3E%3Cpath class='fa-primary' d='M399 175C408.4 165.7 423.6 165.7 432.1 175C442.3 184.4 442.3 199.6 432.1 208.1L385.9 255.1L432.1 303C442.3 312.4 442.3 327.6 432.1 336.1C423.6 346.3 408.4 346.3 399 336.1L352 289.9L304.1 336.1C295.6 346.3 280.4 346.3 271 336.1C261.7 327.6 261.7 312.4 271 303L318.1 255.1L271 208.1C261.7 199.6 261.7 184.4 271 175C280.4 165.7 295.6 165.7 304.1 175L352 222.1L399 175z'/%3E%3Cpath class='fa-secondary' d='M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175V175z'/%3E%3C/svg%3E");
        opacity: 0.2;
    }

    .delete:hover,
    .delete:focus {
        transition: opacity 0.2s;
        opacity: 1;
    }

    /* TODO: Uncomment when the API endpoints are available */
    /* .done {
        transform:none;
        opacity: 0.4;
        filter: drop-shadow (0px 0px 1px rgba(0, 0, 0, 0.1));
    }

    .done.toggle {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cdefs%3E%3Cstyle%3E.fa-secondary%7Bopacity:.4%7D%3C/style%3E%3C/defs%3E%3Cpath class='fa-primary' d='M371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2V172.2z'/%3E%3Cpath class='fa-secondary' d='M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z'/%3E%3C/svg%3E");
    } */

   
</style>
<div class="todo">
    <form action="" method="" >
        <input type="hidden" name="" value="" />
        <button aria-label="todo action" class="toggle"></button>
    </form>

    <form action="" method="" class="text">
        <input type="text" />
        <button class="save" aria-label="save todo"></button>
    </form>

    <form action=""method="">
        <button class="delete"></button>
    </form>
</div>