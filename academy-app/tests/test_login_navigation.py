from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

def wait_for_page_load(driver):
    WebDriverWait(driver, 30).until(
        lambda d: d.execute_script("return document.readyState") == "complete"
    )

def test_login_and_navigation():
    options = Options()
    options.add_argument("--start-maximized")
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

    try:
        # Login na aplicação
        driver.get("http://localhost:3000")
        WebDriverWait(driver, 30).until(EC.presence_of_element_located((By.ID, "email"))).send_keys("admin@gmail.com")
        driver.find_element(By.ID, "password").send_keys("123456")
        driver.find_element(By.XPATH, "//button[contains(text(), 'Entrar')]").click()

        WebDriverWait(driver, 30).until(EC.url_contains("/dashboard"))
        print("Login realizado com sucesso!")

        # Navegar pelas páginas
        pages = [
            ("/frequencia", ".elemento-frequencia"),
            ("/dashboards", ".elemento-dashboards"),
            ("/areas", ".elemento-areas"),
            ("/usuarios", ".elemento-usuarios"),
            ("/avaliacao", ".elemento-avaliacao"),
        ]

        for href, element in pages:
            # Clicar no link e aguardar o carregamento
            link = WebDriverWait(driver, 30).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, f"a[href='{href}']"))
            )
            link.click()
            wait_for_page_load(driver)  # Aguarda a página carregar completamente

            # Verifica se o elemento esperado está presente
            WebDriverWait(driver, 30).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, element))
            )
            print(f"Página {href} carregada com sucesso!")

        print("Teste de navegação concluído com sucesso!")

    except Exception as e:
        print("Erro durante o teste:", str(e))
    finally:
        driver.quit()

if __name__ == "__main__":
    test_login_and_navigation()