from kivy.uix.screenmanager import Screen
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.button import Button


class HomeScreen(Screen):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        layout = BoxLayout(
            orientation="vertical",
            padding=40,
            spacing=20
        )

        label = Label(
            text="Choose Domain",
            font_size=24
        )

        mental_btn = Button(text="Mental Wellness")
        mental_btn.bind(on_press=self.go_mental)

        phobia_btn = Button(text="Phobia Test")

        layout.add_widget(label)
        layout.add_widget(mental_btn)
        layout.add_widget(phobia_btn)

        self.add_widget(layout)

    def go_mental(self, instance):
        self.manager.current = "mental"
 

