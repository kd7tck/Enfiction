#[cfg(test)]
mod tests {
    #[test]
    fn test_assets_exist() {
        assert!(std::path::Path::new("static/index.html").exists());
        assert!(std::path::Path::new("static/style.css").exists());
        assert!(std::path::Path::new("static/script.js").exists());
    }
}
