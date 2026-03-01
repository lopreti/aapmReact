import Swal from "sweetalert2";

export const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
});

export function alertErro(mensagem) {
    Toast.fire({
        icon: "error",
        title: mensagem,
    });
}

export function alertSucesso(mensagem) {
    Toast.fire({
        icon: "success",
        title: mensagem,
    });
}

export async function alertConfirmar(mensagem) {
    const result = await Swal.fire({
        title: mensagem,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim",
        cancelButtonText: "Cancelar",
    });

    return result.isConfirmed; // retorna true ou false
}