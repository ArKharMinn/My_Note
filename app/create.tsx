import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import tw from "twrnc";
import { router } from "expo-router";
import { create } from "@/redux/action";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "date-fns";

const createPage = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const theme = useSelector((state) => state.colorList);
  const dispatch = useDispatch();

  const saveBtn = () => {
    const data = {
      id: new Date(),
      title: title,
      des: des,
      date: formatDate(new Date(), "MM/dd/yyyy - HH:mm a"),
    };
    dispatch(create(data));
    router.back();
  };

  return (
    <View style={tw`h-full`}>
      <View style={tw`h-9`}></View>
      <View
        style={tw`flex-row justify-between items-center border-b-2 border-gray-200 p-4`}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="arrow-back-circle-sharp"
            size={34}
            style={tw` ${
              theme === "pink"
                ? "text-pink-600"
                : theme === "yellow"
                ? "text-yellow-400"
                : theme === "black"
                ? "text-black"
                : "text-blue-600"
            }`}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={saveBtn}
          style={tw` ${
            theme === "pink"
              ? "bg-pink-600"
              : theme === "yellow"
              ? "bg-yellow-400"
              : theme === "black"
              ? "bg-black"
              : "bg-blue-600"
          } px-3 py-2 items-center rounded-xl`}
        >
          <Text style={tw`text-white`}>SAVE</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`px-3`}>
        <TextInput
          style={tw`font-bold p-2 text-xl w-full`}
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
          placeholderTextColor={"gray"}
        />
        <TextInput
          multiline={true}
          value={des}
          onChangeText={setDes}
          style={tw`w-full h-full p-2`}
          placeholder="Start Typing..."
          numberOfLines={10}
          textAlignVertical="top"
        />
      </View>
    </View>
  );
};

export default createPage;
