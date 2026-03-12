import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
});

// ========== TOASTS ==========

export function alertErro(mensagem) {
    Toast.fire({ icon: "error", title: mensagem });
}

export function alertSucesso(mensagem) {
    Toast.fire({ icon: "success", title: mensagem });
}

export function alertAviso(mensagem) {
    Toast.fire({ icon: "warning", title: mensagem });
}

export function alertInfo(mensagem) {
    Toast.fire({ icon: "info", title: mensagem });
}

// ========== MODAIS ==========

export async function alertConfirmar(mensagem) {
    const result = await Swal.fire({
        title: mensagem,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim",
        cancelButtonText: "Cancelar",
        customClass: {
            popup: "swal-popup",
            confirmButton: "swal-btn-confirmar",
            cancelButton: "swal-btn-cancelar",
        }
    });
    return result.isConfirmed;
}

export async function alertSucessoModal(titulo, mensagem) {
    await Swal.fire({
        title: titulo,
        text: mensagem,
        icon: "success",
        confirmButtonText: "Ok",
        customClass: {
            popup: "swal-popup",
            confirmButton: "swal-btn-confirmar",
        }
    });
}

export async function alertErroModal(titulo, mensagem) {
    await Swal.fire({
        title: titulo,
        text: mensagem,
        icon: "error",
        confirmButtonText: "Ok",
        customClass: {
            popup: "swal-popup",
            confirmButton: "swal-btn-confirmar",
        }
    });
}