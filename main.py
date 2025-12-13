from kivy.app import App
from kivy.uix.screenmanager import ScreenManager

from screens.login import LoginScreen
from screens.home import HomeScreen


class MentalHealthApp(App):
    def build(self):
        sm = ScreenManager()
        sm.add_widget(LoginScreen(name="login"))
        sm.add_widget(HomeScreen(name="home"))
        sm.current = "login"   # 👈 IMPORTANT
        return sm


if __name__ == "__main__":
    MentalHealthApp().run()
