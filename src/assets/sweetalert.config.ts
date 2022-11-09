import { SweetAlertOptions } from "sweetalert2";
import colors from "./colors.json";

export const confirmation = ({
  title = "กรุณายืนยัน",
  text = "กรุณายืนยัน...",
  confirmButtonText = "confirm",
  cancelButtonText = "cancel",
  ...props
}: SweetAlertOptions) =>
  ({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: colors.primary,
    cancelButtonColor: colors.hintText,
    confirmButtonText,
    cancelButtonText,
    reverseButtons: true,
    ...props,
  } as SweetAlertOptions);

export const positiveConfirmation = ({
  title = "กรุณายืนยัน",
  text = "กรุณายืนยัน...",
  confirmButtonText = "confirm",
  cancelButtonText = "cancel",
  ...props
}: SweetAlertOptions) =>
  ({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: colors.primary,
    cancelButtonColor: colors.hintText,
    confirmButtonText,
    cancelButtonText,
    reverseButtons: true,
    ...props,
  } as SweetAlertOptions);

export const successConfirmation = ({
  title = "ดำเนินการเสร็จสิ้น",
  ...props
}: SweetAlertOptions) =>
  ({
    title,
    icon: "success",
    showCancelButton: false,
    confirmButtonColor: colors.primary,
    cancelButtonColor: colors.hintText,
    showConfirmButton: false,
    timer: 1500,
    ...props,
  } as SweetAlertOptions);

export const warningConfirmation = ({
  title = "ไม่พบข้อมูลในระบบ",
  ...props
}: SweetAlertOptions) =>
  ({
    title,
    icon: "warning",
    showCancelButton: false,
    confirmButtonColor: colors.primary,
    cancelButtonColor: colors.hintText,
    showConfirmButton: false,
    timer: 1500,
    ...props,
  } as SweetAlertOptions);
