// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let win = app.get_window("main").unwrap();
            #[cfg(not(target_os = "linux"))]
            {
                use window_shadows::set_shadow;
                set_shadow(&win, true).unwrap();
            }
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
