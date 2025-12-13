from kivy.uix.screenmanager import Screen
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.button import Button


class MentalTestScreen(Screen):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        layout = BoxLayout(
            orientation="vertical",
            padding=40,
            spacing=20
        )

        title = Label(
            text="Mental Wellness Test",
            font_size=26
        )

        q1 = Label(
            text="1. How often do you feel stressed?",
            font_size=18
        )

        btn1 = Button(text="Rarely")
        btn2 = Button(text="Sometimes")
        btn3 = Button(text="Often")

        next_btn = Button(
            text="Submit",
            size_hint_y=None,
            height=45
        )

        next_btn.bind(on_press=self.go_home)

        layout.add_widget(title)
        layout.add_widget(q1)
        layout.add_widget(btn1)
        layout.add_widget(btn2)
        layout.add_widget(btn3)
        layout.add_widget(next_btn)

        self.add_widget(layout)

    def go_home(self, instance):
        self.manager.current = "home"
 

