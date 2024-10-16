import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";
import { update } from "@/redux/action";

const detail = () => {
  const { id } = useLocalSearchParams();
  const list = useSelector((state) => state.list);
  const theme = useSelector((state) => state.colorList);
  const detail = list.find((item) => item.id == id);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const dispatch = useDispatch();

  const updateBtn = () => {
    const data = {
      id: detail.id,
      title: title,
      des: des,
    };
    dispatch(update(data));
    router.back();
  };

  useEffect(() => {
    setTitle(detail.title);
    setDes(detail.des);
  }, []);

  return (
    <View>
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
            onPress={() => updateBtn()}
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
            <Text style={tw`text-white`}>UPDATE</Text>
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
    </View>
  );
};

export default detail;
